// ไฟล์: src/components/ui/AdUnit.tsx

import React from 'react';

interface AdUnitProps {
  className?: string;
  slot?: string; // AdSense slot ID
  label?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ className, slot, label = "Advertisement" }) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center py-6 my-8 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden ${className}`}>
      <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">{label}</span>
      {/* พื้นที่สำหรับใส่ Script AdSense จริง */}
      <div className="w-full max-w-[728px] h-[90px] bg-gray-200 animate-pulse rounded flex items-center justify-center text-gray-400">
        Google AdSense Area ({slot || 'Auto'})
      </div>
    </div>
  );
};

export default AdUnit;