'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Award, User, Activity } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TeamSection() {
  const t = useTranslations('team');
  
  return (
    <div>
      {/* Container Header - Crew Quarters */}
      <motion.div 
        className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded text-xs font-mono uppercase tracking-wider mb-8 border-l-4 border-purple-500"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <User className="w-3 h-3" />
        {t('header')}
        <Activity className="w-3 h-3 animate-pulse text-green-400" />
      </motion.div>

      <motion.h2 
        className="text-3xl font-black text-gray-900 dark:text-white mb-12 tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('chiefOfficer')}
      </motion.h2>

      {/* Engineering Profile Grid */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        
        {/* Profile Column */}
        <motion.div 
          className="lg:col-span-1 text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* ID Badge Style */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded border-l-4 border-purple-500 mb-6">
            <div className="w-32 h-32 mx-auto rounded border-4 border-gray-300 dark:border-gray-600 overflow-hidden mb-4">
              <Image
                src="/assets/anderson-photo.jpeg"
                alt={t('andersonAlt')}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              {t('andersonName')}
            </h3>
            <div className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wider">
              {t('role')}
            </div>
            
            <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400 font-mono">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-3 h-3" />
                <span>{t('computerScience')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div 
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
          {/* Core Systems */}
          <div>
            <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase">
              {t('coreSystems')}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-blue-500">
                <div className="font-black text-gray-900 dark:text-white mb-1 text-sm uppercase tracking-wider">{t('aiEngineering')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">{t('aiEngineeringDesc')}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-green-500">
                <div className="font-black text-gray-900 dark:text-white mb-1 text-sm uppercase tracking-wider">{t('systemArchitecture')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">{t('systemArchitectureDesc')}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-orange-500">
                <div className="font-black text-gray-900 dark:text-white mb-1 text-sm uppercase tracking-wider">{t('fullstackDev')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">{t('fullstackDevDesc')}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-red-500">
                <div className="font-black text-gray-900 dark:text-white mb-1 text-sm uppercase tracking-wider">{t('dataScience')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">{t('dataScienceDesc')}</div>
              </div>
            </div>
          </div>

          {/* Mission Log */}
          <div>
            <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase">
              {t('missionLog')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-purple-500">
                <Award className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t('neuralLabFoundation')}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-mono mt-1">{t('neuralLabFoundationDesc')}</div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono font-bold">2025</div>
              </div>
              
              <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-blue-500">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wider">{t('cidadaoDeployment')}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-mono mt-1">{t('cidadaoDeploymentDesc')}</div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono font-bold">2024</div>
              </div>
            </div>
          </div>

          {/* Mission Statement - Industrial Style */}
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-6 border-l-4 border-yellow-500">
            <div className="text-xs font-mono uppercase tracking-wider text-yellow-400 mb-2">{t('missionStatement')}</div>
            <blockquote className="text-gray-200 font-medium leading-relaxed">
              {t('missionQuote')}
            </blockquote>
            <cite className="text-xs text-gray-400 font-mono uppercase tracking-wider block mt-3">
              {t('missionAuthor')}
            </cite>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}