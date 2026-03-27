export const MindsetDynamicArt = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ background: 'transparent' }}>
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">
        <line x1="37.20" y1="30.00" x2="34.80" y2="30.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="37.20;36.95;36.20;34.95;33.20;31.45;30.20;29.45;29.20;29.45;30.20;31.45;33.20;34.95;36.20;36.95;37.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.00;30.13;30.50;31.13;32.00;32.88;33.50;33.88;34.00;33.88;33.50;32.88;32.00;31.13;30.50;30.13;30.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="34.80;34.55;33.80;32.55;30.80;29.05;27.80;27.05;26.80;27.05;27.80;29.05;30.80;32.55;33.80;34.55;34.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="30.00;30.13;30.50;31.13;32.00;32.88;33.50;33.88;34.00;33.88;33.50;32.88;32.00;31.13;30.50;30.13;30.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="62.80" y1="30.00" x2="65.20" y2="30.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="62.80;63.05;63.80;65.05;66.80;68.55;69.80;70.55;70.80;70.55;69.80;68.55;66.80;65.05;63.80;63.05;62.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.00;30.13;30.50;31.13;32.00;32.88;33.50;33.88;34.00;33.88;33.50;32.88;32.00;31.13;30.50;30.13;30.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="65.20;65.45;66.20;67.45;69.20;70.95;72.20;72.95;73.20;72.95;72.20;70.95;69.20;67.45;66.20;65.45;65.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="30.00;30.13;30.50;31.13;32.00;32.88;33.50;33.88;34.00;33.88;33.50;32.88;32.00;31.13;30.50;30.13;30.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="42.80" y1="30.80" x2="44.80" y2="30.80" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="42.80;42.40;41.20;39.20;36.40;33.60;31.60;30.40;30.00;30.40;31.60;33.60;36.40;39.20;41.20;42.40;42.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;30.98;31.50;32.38;33.60;34.83;35.70;36.23;36.40;36.23;35.70;34.83;33.60;32.38;31.50;30.98;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="44.80;44.46;43.45;41.76;39.40;37.04;35.35;34.34;34.00;34.34;35.35;37.04;39.40;41.76;43.45;44.46;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="30.80;30.98;31.50;32.38;33.60;34.83;35.70;36.23;36.40;36.23;35.70;34.83;33.60;32.38;31.50;30.98;30.80" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="57.20" y1="30.80" x2="54.80" y2="30.80" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="57.20;56.59;54.70;51.28;46.00;40.50;36.74;34.66;34.00;34.66;36.74;40.50;46.00;51.28;54.70;56.59;57.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;30.85;31.00;31.27;32.00;33.45;34.97;36.03;36.40;36.03;34.97;33.45;32.00;31.27;31.00;30.85;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="54.80;54.16;52.30;49.47;46.00;42.75;40.26;38.59;38.00;38.59;40.26;42.75;46.00;49.47;52.30;54.16;54.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="30.80;31.10;32.00;33.48;35.20;36.20;36.43;36.42;36.40;36.42;36.43;36.20;35.20;33.48;32.00;31.10;30.80" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="44.80" y1="30.80" x2="45.20" y2="32.40" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="44.80;44.60;43.99;42.92;41.39;39.85;38.80;38.19;38.00;38.19;38.80;39.85;41.39;42.92;43.99;44.60;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;30.92;31.31;32.01;33.13;34.44;35.49;36.17;36.40;36.17;35.49;34.44;33.13;32.01;31.31;30.92;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="45.20;45.09;44.76;44.26;43.61;42.96;42.45;42.12;42.00;42.12;42.45;42.96;43.61;44.26;44.76;45.09;45.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="32.40;32.58;33.09;33.89;34.87;35.66;36.11;36.33;36.40;36.33;36.11;35.66;34.87;33.89;33.09;32.58;32.40" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="53.20" y1="31.60" x2="50.80" y2="31.60" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="53.20;52.97;52.20;50.65;48.00;45.12;43.24;42.28;42.00;42.28;43.24;45.12;48.00;50.65;52.20;52.97;53.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="31.60;31.63;31.70;31.85;32.40;33.68;35.07;36.06;36.40;36.06;35.07;33.68;32.40;31.85;31.70;31.63;31.60" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="50.80;50.53;49.80;48.85;48.00;47.38;46.76;46.22;46.00;46.22;46.76;47.38;48.00;48.85;49.80;50.53;50.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="31.60;31.87;32.70;34.05;35.60;36.42;36.53;36.44;36.40;36.44;36.53;36.42;35.60;34.05;32.70;31.87;31.60" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="50.80" y1="31.60" x2="50.80" y2="34.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="50.80;50.65;50.20;49.40;48.27;47.18;46.49;46.11;46.00;46.11;46.49;47.18;48.27;49.40;50.20;50.65;50.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="31.60;31.69;31.97;32.52;33.47;34.63;35.58;36.19;36.40;36.19;35.58;34.63;33.47;32.52;31.97;31.69;31.60" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="50.80;50.77;50.70;50.62;50.53;50.39;50.21;50.06;50.00;50.06;50.21;50.39;50.53;50.62;50.70;50.77;50.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.00;34.14;34.53;35.10;35.73;36.15;36.32;36.38;36.40;36.38;36.32;36.15;35.73;35.10;34.53;34.14;34.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="45.20" y1="32.40" x2="44.80" y2="34.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="45.20;45.38;45.89;46.67;47.63;48.57;49.32;49.82;50.00;49.82;49.32;48.57;47.63;46.67;45.89;45.38;45.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="32.40;32.45;32.63;32.99;33.69;34.68;35.58;36.19;36.40;36.19;35.58;34.68;33.69;32.99;32.63;32.45;32.40" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="44.80;45.06;45.86;47.27;49.37;51.49;52.93;53.74;54.00;53.74;52.93;51.49;49.37;47.27;45.86;45.06;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.00;34.15;34.57;35.21;35.91;36.32;36.42;36.41;36.40;36.41;36.42;36.32;35.91;35.21;34.57;34.15;34.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="34.80" y1="30.00" x2="34.80" y2="38.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="34.80;35.27;36.72;39.29;43.28;47.72;51.14;53.28;54.00;53.28;51.14;47.72;43.28;39.29;36.72;35.27;34.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.00;30.14;30.62;31.57;33.08;34.63;35.66;36.22;36.40;36.22;35.66;34.63;33.08;31.57;30.62;30.14;30.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="34.80;35.66;38.18;42.23;47.52;52.35;55.56;57.40;58.00;57.40;55.56;52.35;47.52;42.23;38.18;35.66;34.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="38.00;38.01;37.98;37.78;37.32;36.82;36.54;36.43;36.40;36.43;36.54;36.82;37.32;37.78;37.98;38.01;38.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="42.80" y1="30.80" x2="42.80" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="42.80;43.18;44.35;46.41;49.56;53.05;55.74;57.43;58.00;57.43;55.74;53.05;49.56;46.41;44.35;43.18;42.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;30.92;31.31;32.09;33.36;34.73;35.68;36.23;36.40;36.23;35.68;34.73;33.36;32.09;31.31;30.92;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="42.80;43.49;45.55;48.86;53.24;57.28;59.96;61.50;62.00;61.50;59.96;57.28;53.24;48.86;45.55;43.49;42.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.23;37.29;37.26;37.04;36.72;36.52;36.42;36.40;36.42;36.52;36.72;37.04;37.26;37.29;37.23;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="44.80" y1="34.00" x2="42.80" y2="34.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="44.80;45.46;47.36;50.29;53.90;57.23;59.74;61.41;62.00;61.41;59.74;57.23;53.90;50.29;47.36;45.46;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.00;33.97;33.87;33.68;33.70;34.40;35.38;36.13;36.40;36.13;35.38;34.40;33.70;33.68;33.87;33.97;34.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="42.80;43.40;45.29;48.67;53.90;59.41;63.21;65.33;66.00;65.33;63.21;59.41;53.90;48.67;45.29;43.40;42.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.00;34.18;34.73;35.67;36.70;37.05;36.82;36.52;36.40;36.52;36.82;37.05;36.70;35.67;34.73;34.18;34.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="46.80" y1="37.20" x2="48.00" y2="30.80" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="46.80;47.31;48.89;51.62;55.68;60.03;63.30;65.32;66.00;65.32;63.30;60.03;55.68;51.62;48.89;47.31;46.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="37.20;37.21;37.20;37.11;36.88;36.62;36.47;36.41;36.40;36.41;36.47;36.62;36.88;37.11;37.20;37.21;37.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="48.00;48.77;51.06;54.77;59.72;64.38;67.55;69.39;70.00;69.39;67.55;64.38;59.72;54.77;51.06;48.77;48.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="30.80;30.94;31.40;32.24;33.52;34.83;35.73;36.24;36.40;36.24;35.73;34.83;33.52;32.24;31.40;30.94;30.80" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="48.00" y1="30.80" x2="49.20" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="48.00;47.33;45.33;42.01;37.36;32.73;29.43;27.46;26.80;27.46;29.43;32.73;37.36;42.01;45.33;47.33;48.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;30.90;31.20;31.69;32.39;33.09;33.59;33.90;34.00;33.90;33.59;33.09;32.39;31.69;31.20;30.90;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="49.20;48.50;46.42;42.93;38.04;33.13;29.62;27.50;26.80;27.50;29.62;33.13;38.04;42.93;46.42;48.50;49.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.35;37.80;38.56;39.61;40.66;41.41;41.85;42.00;41.85;41.41;40.66;39.61;38.56;37.80;37.35;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="50.80" y1="34.00" x2="53.20" y2="34.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="50.80;51.38;53.13;56.17;60.76;65.86;69.84;72.35;73.20;72.35;69.84;65.86;60.76;56.17;53.13;51.38;50.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.00;34.06;34.20;34.28;34.16;33.97;33.92;33.97;34.00;33.97;33.92;33.97;34.16;34.28;34.20;34.06;34.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="53.20;53.95;56.17;59.76;64.44;68.61;71.26;72.73;73.20;72.73;71.26;68.61;64.44;59.76;56.17;53.95;53.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.00;34.19;34.80;35.97;37.84;39.78;41.08;41.78;42.00;41.78;41.08;39.78;37.84;35.97;34.80;34.19;34.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="54.80" y1="30.80" x2="54.80" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="54.80;53.93;51.35;47.16;41.56;36.30;32.74;30.68;30.00;30.68;32.74;36.30;41.56;47.16;51.35;53.93;54.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.80;31.02;31.71;32.99;34.96;37.03;38.48;39.33;39.60;39.33;38.48;37.03;34.96;32.99;31.71;31.02;30.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="54.80;54.24;52.55;49.61;45.24;40.53;36.96;34.75;34.00;34.75;36.96;40.53;45.24;49.61;52.55;54.24;54.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.33;37.69;38.16;38.64;39.02;39.32;39.52;39.60;39.52;39.32;39.02;38.64;38.16;37.69;37.33;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="54.80" y1="34.00" x2="56.80" y2="34.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="54.80;54.15;52.20;48.95;44.40;39.85;36.60;34.65;34.00;34.65;36.60;39.85;44.40;48.95;52.20;54.15;54.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.00;34.17;34.70;35.58;36.80;38.02;38.90;39.43;39.60;39.43;38.90;38.02;36.80;35.58;34.70;34.17;34.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="56.80;56.21;54.45;51.51;47.40;43.29;40.35;38.59;38.00;38.59;40.35;43.29;47.40;51.51;54.45;56.21;56.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.00;34.17;34.70;35.58;36.80;38.02;38.90;39.43;39.60;39.43;38.90;38.02;36.80;35.58;34.70;34.17;34.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="65.20" y1="30.00" x2="65.20" y2="38.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="65.20;64.22;61.32;56.64;50.48;44.77;40.94;38.73;38.00;38.73;40.94;44.77;50.48;56.64;61.32;64.22;65.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30.00;30.24;31.02;32.47;34.68;36.93;38.46;39.32;39.60;39.32;38.46;36.93;34.68;32.47;31.02;30.24;30.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="65.20;64.61;62.78;59.58;54.72;49.40;45.36;42.85;42.00;42.85;45.36;49.40;54.72;59.58;62.78;64.61;65.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="38.00;38.11;38.38;38.68;38.92;39.12;39.34;39.53;39.60;39.53;39.34;39.12;38.92;38.68;38.38;38.11;38.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="44.80" y1="34.00" x2="45.20" y2="35.60" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="44.80;44.73;44.49;44.05;43.39;42.73;42.30;42.07;42.00;42.07;42.30;42.73;43.39;44.05;44.49;44.73;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.00;34.12;34.51;35.21;36.33;37.64;38.69;39.37;39.60;39.37;38.69;37.64;36.33;35.21;34.51;34.12;34.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="45.20;45.21;45.26;45.39;45.61;45.84;45.95;45.99;46.00;45.99;45.95;45.84;45.61;45.39;45.26;45.21;45.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="35.60;35.78;36.29;37.09;38.07;38.86;39.31;39.53;39.60;39.53;39.31;38.86;38.07;37.09;36.29;35.78;35.60" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="47.40" y1="34.80" x2="48.60" y2="34.80" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="47.40;47.36;47.23;47.01;46.70;46.39;46.17;46.04;46.00;46.04;46.17;46.39;46.70;47.01;47.23;47.36;47.40" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.80;34.95;35.40;36.15;37.20;38.25;39.00;39.45;39.60;39.45;39.00;38.25;37.20;36.15;35.40;34.95;34.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="48.60;48.64;48.77;48.99;49.30;49.61;49.83;49.96;50.00;49.96;49.83;49.61;49.30;48.99;48.77;48.64;48.60" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="34.80;34.95;35.40;36.15;37.20;38.25;39.00;39.45;39.60;39.45;39.00;38.25;37.20;36.15;35.40;34.95;34.80" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="53.20" y1="34.00" x2="53.20" y2="36.40" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="53.20;53.10;52.80;52.25;51.47;50.73;50.29;50.06;50.00;50.06;50.29;50.73;51.47;52.25;52.80;53.10;53.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="34.00;34.11;34.47;35.15;36.27;37.60;38.68;39.37;39.60;39.37;38.68;37.60;36.27;35.15;34.47;34.11;34.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="53.20;53.22;53.30;53.47;53.73;53.94;54.01;54.01;54.00;54.01;54.01;53.94;53.73;53.47;53.30;53.22;53.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="36.40;36.56;37.03;37.73;38.53;39.12;39.42;39.56;39.60;39.56;39.42;39.12;38.53;37.73;37.03;36.56;36.40" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="45.20" y1="35.60" x2="44.80" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="45.20;45.50;46.39;47.79;49.63;51.45;52.82;53.70;54.00;53.70;52.82;51.45;49.63;47.79;46.39;45.50;45.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="35.60;35.65;35.83;36.19;36.89;37.88;38.78;39.39;39.60;39.39;38.78;37.88;36.89;36.19;35.83;35.65;35.60" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="44.80;45.18;46.36;48.40;51.37;54.36;56.43;57.62;58.00;57.62;56.43;54.36;51.37;48.40;46.36;45.18;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.35;37.77;38.41;39.11;39.52;39.62;39.61;39.60;39.61;39.62;39.52;39.11;38.41;37.77;37.35;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="53.20" y1="36.40" x2="50.80" y2="36.40" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="53.20;53.47;54.20;55.15;56.00;56.62;57.24;57.78;58.00;57.78;57.24;56.62;56.00;55.15;54.20;53.47;53.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="36.40;36.38;36.30;36.20;36.40;37.33;38.47;39.31;39.60;39.31;38.47;37.33;36.40;36.20;36.30;36.38;36.40" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="50.80;51.03;51.80;53.35;56.00;58.88;60.76;61.72;62.00;61.72;60.76;58.88;56.00;53.35;51.80;51.03;50.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="36.40;36.62;37.30;38.40;39.60;40.07;39.93;39.69;39.60;39.69;39.93;40.07;39.60;38.40;37.30;36.62;36.40" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="44.80" y1="37.20" x2="42.80" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="44.80;45.46;47.36;50.29;53.90;57.23;59.74;61.41;62.00;61.41;59.74;57.23;53.90;50.29;47.36;45.46;44.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="37.20;37.17;37.07;36.88;36.90;37.60;38.58;39.33;39.60;39.33;38.58;37.60;36.90;36.88;37.07;37.17;37.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="42.80;43.40;45.29;48.67;53.90;59.41;63.21;65.33;66.00;65.33;63.21;59.41;53.90;48.67;45.29;43.40;42.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.38;37.93;38.87;39.90;40.25;40.02;39.72;39.60;39.72;40.02;40.25;39.90;38.87;37.93;37.38;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="54.80" y1="37.20" x2="57.20" y2="37.20" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="54.80;55.15;56.20;57.95;60.40;62.85;64.60;65.65;66.00;65.65;64.60;62.85;60.40;57.95;56.20;55.15;54.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="37.20;37.28;37.50;37.88;38.40;38.93;39.30;39.52;39.60;39.52;39.30;38.93;38.40;37.88;37.50;37.28;37.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="57.20;57.60;58.80;60.80;63.60;66.40;68.40;69.60;70.00;69.60;68.40;66.40;63.60;60.80;58.80;57.60;57.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="37.20;37.28;37.50;37.88;38.40;38.93;39.30;39.52;39.60;39.52;39.30;38.93;38.40;37.88;37.50;37.28;37.20" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="34.80" y1="38.00" x2="37.20" y2="38.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="34.80;34.55;33.80;32.55;30.80;29.05;27.80;27.05;26.80;27.05;27.80;29.05;30.80;32.55;33.80;34.55;34.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="38.00;38.13;38.50;39.13;40.00;40.88;41.50;41.88;42.00;41.88;41.50;40.88;40.00;39.13;38.50;38.13;38.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="37.20;36.95;36.20;34.95;33.20;31.45;30.20;29.45;29.20;29.45;30.20;31.45;33.20;34.95;36.20;36.95;37.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="38.00;38.13;38.50;39.13;40.00;40.88;41.50;41.88;42.00;41.88;41.50;40.88;40.00;39.13;38.50;38.13;38.00" dur="6s" repeatCount="indefinite" />
        </line>
        <line x1="65.20" y1="38.00" x2="62.80" y2="38.00" stroke="#c084fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <animate attributeName="x1" values="65.20;65.45;66.20;67.45;69.20;70.95;72.20;72.95;73.20;72.95;72.20;70.95;69.20;67.45;66.20;65.45;65.20" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y1" values="38.00;38.13;38.50;39.13;40.00;40.88;41.50;41.88;42.00;41.88;41.50;40.88;40.00;39.13;38.50;38.13;38.00" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="62.80;63.05;63.80;65.05;66.80;68.55;69.80;70.55;70.80;70.55;69.80;68.55;66.80;65.05;63.80;63.05;62.80" dur="6s" repeatCount="indefinite" />
          <animate attributeName="y2" values="38.00;38.13;38.50;39.13;40.00;40.88;41.50;41.88;42.00;41.88;41.50;40.88;40.00;39.13;38.50;38.13;38.00" dur="6s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  </div>
);
