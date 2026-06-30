const fs = require('fs');
const content = fs.readFileSync('src/components/landing/DashboardPreviewSection.tsx', 'utf8');

const updated = content.replace(
  '<img src={dashboardImg} alt="Dashboard preview" className="w-full rounded-[16px] border border-[#EBE7E0]" />',
  `{/* YouTube Video Embed */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-[#EBE7E0]">
            <iframe 
              className="absolute inset-0 h-full w-full border-none"
              src="https://www.youtube.com/embed/13ey36f4ItU?start=84" 
              title="SPAPOS Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>`
);

fs.writeFileSync('src/components/landing/DashboardPreviewSection.tsx', updated);
