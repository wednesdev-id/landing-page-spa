#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: ./manage.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev         Start development server (Frontend + Backend)"
    echo "  install     Install dependencies"
    echo "  build       Build the project"
    echo "  lint        Lint the code"
    echo "  db:push     Push Prisma schema to database"
    echo "  db:studio   Open Prisma Studio"
    echo "  docker:web  Start Docker (Web Only - Connects to .env services)"
    echo "  docker:local Start Docker (Full Stack - Local DB & MinIO)"
    echo "  docker:down Stop all Docker containers"
    echo "  clean       Remove node_modules and dist"
    echo "  help        Show this help message"
    echo ""
}

# Function to kill processes on specific ports
cleanup() {
    echo ""
    echo "Stopping servers..."
    # Kill processes on ports 3000 to 3010 to be safe
    for port in {3000..3010}; do
        pid=$(lsof -ti:$port)
        if [ ! -z "$pid" ]; then
            echo "Killing process on port $port (PID: $pid)"
            kill -9 $pid 2>/dev/null
        fi
    done
    echo "Servers stopped."
    exit 0
}

# Trap SIGINT (Ctrl+C) to run cleanup
trap cleanup SIGINT

# Check if command is provided
if [ -z "$1" ]; then
    usage
    exit 1
fi

case "$1" in
    dev)
        # Pre-cleanup to ensure ports are free
        echo "Checking for running processes on ports..."
        for port in {3000..3010}; do
            pid=$(lsof -ti:$port)
            if [ ! -z "$pid" ]; then
                echo "Killing existing process on port $port (PID: $pid)"
                kill -9 $pid 2>/dev/null
            fi
        done
        
        echo "Starting development environment..."
        pnpm run dev:all
        
        # Wait for background processes to finish (so trap works)
        wait
        ;;
    install)
        echo "Installing dependencies..."
        pnpm install
        ;;
    build)
        echo "Building project..."
        pnpm run build
        ;;
    lint)
        echo "Linting code..."
        pnpm run lint
        ;;
    db:push)
        echo "Pushing database schema..."
        pnpm prisma db push
        ;;
    db:studio)
        echo "Opening Prisma Studio..."
        pnpm prisma studio
        ;;
    docker:web)
        echo "Starting Docker (Web Only)..."
        echo "Connecting to services defined in .env..."
        docker compose --env-file .env -f infrastructure/docker-compose.yml up --build
        ;;
    docker:local)
        echo "Starting Docker (Full Stack Local)..."
        echo "Starting local Postgres and MinIO..."
        docker compose --env-file .env -f infrastructure/docker-compose.yml -f infrastructure/docker-compose.local.yml up --build
        ;;
    docker:down)
        echo "Stopping Docker containers..."
        echo "Note: Database and MinIO volumes will be preserved."
        docker compose --env-file .env -f infrastructure/docker-compose.yml -f infrastructure/docker-compose.local.yml down
        ;;
    clean)
        echo "Cleaning project..."
        rm -rf node_modules dist
        echo "Clean complete."
        ;;
    help)
        usage
        ;;
    *)
        echo "Invalid command: $1"
        usage
        exit 1
        ;;
esac
