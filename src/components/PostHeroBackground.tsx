import { motion } from "framer-motion";

const auroraWavePaths = [
  "M-140 252C63 186 208 150 348 172C520 200 650 304 833 306C1001 309 1114 212 1284 197C1444 183 1597 252 1748 233",
  "M-180 366C37 282 209 249 390 278C572 308 681 392 866 394C1044 396 1174 310 1348 293C1502 278 1632 327 1768 316",
  "M-130 504C58 433 252 405 430 426C616 448 730 519 900 530C1070 541 1200 494 1362 474C1518 455 1668 479 1784 468",
];

const particles = Array.from({ length: 64 }, (_, index) => ({
  left: `${4 + ((index * 17) % 92)}%`,
  top: `${16 + ((index * 23) % 56)}%`,
  size: index % 9 === 0 ? 2.6 : index % 4 === 0 ? 2 : 1.35,
  delay: (index % 12) * 0.32,
  duration: 4.8 + (index % 7) * 0.7,
  opacity: index % 9 === 0 ? 0.82 : index % 4 === 0 ? 0.62 : 0.38,
}));

const microParticles = Array.from({ length: 90 }, (_, index) => ({
  left: `${2 + ((index * 11) % 96)}%`,
  top: `${14 + ((index * 19) % 62)}%`,
  size: index % 5 === 0 ? 1.2 : 0.8,
  delay: (index % 15) * 0.24,
  duration: 5.5 + (index % 8) * 0.55,
  opacity: index % 5 === 0 ? 0.28 : 0.16,
}));

export default function PostHeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(3,12,26,0.65)_0%,rgba(0,0,0,0)_38%),linear-gradient(180deg,#000000_0%,#010206_42%,#000000_100%)]" />

      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, transparent 8%, black 20%, black 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, transparent 8%, black 20%, black 100%)",
        }}
      >
        <motion.div
          className="absolute left-[-12%] top-[10%] h-[28rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,rgba(37,99,235,0.12)_34%,rgba(2,6,23,0)_74%)] blur-[130px] mix-blend-screen"
          animate={{ x: [0, 54, 0], y: [0, 28, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute right-[-12%] top-[16%] h-[30rem] w-[48rem] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18)_0%,rgba(45,212,191,0.11)_30%,rgba(0,0,0,0)_74%)] blur-[145px] mix-blend-screen"
          animate={{ x: [0, -48, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <motion.div
          className="absolute left-[18%] top-[38%] h-[24rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18)_0%,rgba(16,185,129,0.1)_38%,rgba(0,0,0,0)_74%)] blur-[115px]"
          animate={{ x: [0, 22, 0], y: [0, 32, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        <motion.div
          className="absolute right-[12%] top-[48%] h-[22rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,rgba(14,165,233,0.08)_40%,rgba(0,0,0,0)_74%)] blur-[120px]"
          animate={{ x: [0, -26, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        />

        <motion.div
          className="absolute inset-x-[-6%] top-[14%] h-[38rem] opacity-70"
          animate={{ x: [-20, 20, -20], y: [0, 14, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-full w-full" viewBox="0 0 1600 720" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aurora-wave-primary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="18%" stopColor="rgba(59,130,246,0.05)" />
                <stop offset="38%" stopColor="rgba(56,189,248,0.28)" />
                <stop offset="58%" stopColor="rgba(45,212,191,0.25)" />
                <stop offset="78%" stopColor="rgba(34,197,94,0.12)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <filter id="aurora-wave-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {auroraWavePaths.map((path, index) => (
              <path
                key={path}
                d={path}
                fill="none"
                stroke="url(#aurora-wave-primary)"
                strokeLinecap="round"
                strokeWidth={index === 1 ? 2.4 : 1.7}
                opacity={index === 1 ? 0.55 : 0.34}
                filter="url(#aurora-wave-blur)"
              />
            ))}
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-x-[-8%] top-[34%] h-[42rem] opacity-45"
          animate={{ x: [18, -16, 18], y: [0, -12, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <svg className="h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aurora-wave-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="20%" stopColor="rgba(16,185,129,0.04)" />
                <stop offset="42%" stopColor="rgba(45,212,191,0.18)" />
                <stop offset="62%" stopColor="rgba(96,165,250,0.2)" />
                <stop offset="84%" stopColor="rgba(59,130,246,0.08)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <filter id="aurora-wave-blur-soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <path
              d="M-180 520C58 458 204 401 408 430C603 458 782 600 964 602C1174 604 1314 454 1510 474C1620 485 1717 548 1802 564"
              fill="none"
              stroke="url(#aurora-wave-secondary)"
              strokeLinecap="round"
              strokeWidth="2.1"
              opacity="0.42"
              filter="url(#aurora-wave-blur-soft)"
            />
            <path
              d="M-120 632C62 572 213 536 404 556C610 578 778 706 962 714C1170 724 1331 603 1510 610C1617 614 1712 648 1784 676"
              fill="none"
              stroke="url(#aurora-wave-secondary)"
              strokeLinecap="round"
              strokeWidth="1.8"
              opacity="0.28"
              filter="url(#aurora-wave-blur-soft)"
            />
          </svg>
        </motion.div>

        {particles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{ opacity: [0.12, particle.opacity, 0.12], scale: [1, 1.35, 1] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {microParticles.map((particle) => (
          <motion.span
            key={`micro-${particle.left}-${particle.top}`}
            className="absolute rounded-full bg-white blur-[0.6px]"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{ opacity: [0.04, particle.opacity, 0.04], scale: [1, 1.2, 1] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(125,211,252,0.06)_0%,rgba(16,185,129,0.03)_24%,rgba(0,0,0,0)_54%),linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.68)_100%)]" />
      </div>
    </div>
  );
}
