import { useEffect, useState } from 'react';

export default (config)=> {
  const { mobile, laptop, desktop } = config;
  const signature = `${mobile}-${laptop}-${desktop}`;

  const queries = {
    notSupport: `(max-width: ${mobile - 1}px)`,
    mobile: `(min-width: ${mobile}px) and (max-width: ${laptop - 1}px)`,
    laptop: `(min-width: ${laptop}px) and (max-width: ${desktop - 1}px)`,
    desktop: `(min-width: ${desktop}px)`,
  }

  const getActivePhase = ()=> {
    if (typeof window == 'undefined') return 'notSupport';

    for (const [phase, query] of Object.entries(queries)) {
      if (window.matchMedia(query).matches) return phase;
    }

    return 'notSupport';
  }

  const [phase, setPhase] = useState(getActivePhase);

  useEffect(()=> {
    if (typeof window == 'undefined') return;

    const mqls = Object.entries(queries).map(([phase, query])=> ({
      phase, mql: window.matchMedia(query),
    }))

    const handleChange = ()=> {
      for (const {phase, mql} of mqls) if (mql.matches) { setPhase(phase); return }
      setPhase('notSupport');
    }

    handleChange();

    mqls.forEach(({ mql }) => mql.addEventListener('change', handleChange))
    return ()=> mqls.forEach(({ mql })=> mql.removeEventListener('change', handleChange));
  }, [signature]);

  return phase;
}