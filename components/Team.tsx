import React from 'react';
import { TeamMember } from '../types';
import { Icons } from './Icons';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Chen Wei',
    role: 'Chief Scientist',
    bio: 'Expert in Computer Vision & Remote Sensing. Formerly at NASA JPL.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen&backgroundColor=b6e3f4'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Head of Engineering',
    bio: 'Architecting scalable model inference infrastructure for geospatial data.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede'
  },
  {
    id: '3',
    name: 'Alex Rivera',
    role: 'Lead AI Researcher',
    bio: 'Focusing on multi-modal fusion and agentic reasoning for GIS.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=ffdfbf'
  },
  {
    id: '4',
    name: 'Team Wind',
    role: 'Research Group',
    bio: 'A collective of 15 PhDs and engineers dedicated to Earth Observation.',
    avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=Wind&backgroundColor=d1d4f9'
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-space-900 relative overflow-hidden">
       {/* Decorative background */}
       <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-space-800 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-4">Meet The Team</h2>
            <p className="text-slate-400">The minds behind TerraSense.</p>
          </div>
          <button className="mt-4 md:mt-0 text-brand-DEFAULT border-b border-brand-DEFAULT hover:text-white hover:border-white transition-colors pb-1">
            Join our mission &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-DEFAULT rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"></div>
              <div className="h-full bg-space-800 rounded-2xl p-6 border border-slate-700 group-hover:border-transparent transition-colors flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-space-700 mb-6 overflow-hidden border-4 border-space-900 group-hover:border-brand-DEFAULT/50 transition-colors">
                  <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <span className="text-xs font-mono text-brand-DEFAULT mb-4 px-2 py-1 bg-brand-DEFAULT/10 rounded">{member.role}</span>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <Icons.Twitter className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <Icons.Linkedin className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
