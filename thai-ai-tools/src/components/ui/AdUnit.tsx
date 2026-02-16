// ไฟล์: src/components/ui/AdUnit.tsx

import React from 'react';

interface AdUnitProps {
  className?: string;
  slot?: string; // AdSense slot ID
  label?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ className, slot, label = "Advertisement" }) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center py-8 my-10 bg-surface border border-border rounded-2xl overflow-hidden ${className}`}>
      <span className="text-[10px] font-bold text-muted/50 uppercase tracking-widest mb-3">
        {label}
      </span>
      
      {/* พื้นที่สำหรับใส่ Script AdSense จริง */}
      <div className="w-full max-w-[728px] h-[90px] bg-border/20 animate-pulse rounded-lg flex items-center justify-center text-muted text-sm font-medium border border-dashed border-border">
        Google AdSense Area ({slot || 'Auto'})
      </div>
    </div>
  );
};

export default AdUnit;