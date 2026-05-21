"use client";

import { useState } from "react";

export function TeamMemberCard({ member }: { member: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-md flex flex-col">
      <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-surface-container-high flex flex-col items-center justify-center text-on-surface-variant group-hover:bg-primary-container/20 group-hover:text-primary transition-colors duration-500 shrink-0 relative">
        <span className="font-serif text-5xl font-medium opacity-50 z-10">
          {member.initials}
        </span>
      </div>
      <div className="space-y-1 mb-4 flex-1">
        <h3 className="font-serif text-2xl text-on-surface leading-tight font-medium">
          {member.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">
          {member.role}
        </p>
      </div>
      {member.bio && (
        <div className="mt-4 border-t border-outline-variant/20 pt-4">
          <p
            className={`text-sm text-on-surface-variant leading-relaxed whitespace-pre-line ${
              isExpanded ? "" : "line-clamp-4"
            }`}
          >
            {member.bio}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm mt-2 font-medium hover:underline focus:outline-none"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      )}
    </div>
  );
}
