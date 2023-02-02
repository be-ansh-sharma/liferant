import { isBrowser } from 'utils/Utils';
import { useEffect } from 'react';

const Ads = ({ type, slot }) => {
  // useEffect(() => {
  //   if (isBrowser) {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   }
  // }, []);
  // let CMP = null;

  // switch (type) {
  //   case 'single':
  //     CMP = (
  //       <ins
  //         className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="ca-pub-2290547364208155"
  //         data-ad-slot={slot}
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"></ins>
  //     );
  //     break;
  //   case 'content':
  //     CMP = (
  //       <ins
  //         className="adsbygoogle"
  //         style={{ display: 'block', textAlign: 'center' }}
  //         data-ad-layout="in-article"
  //         data-ad-format="fluid"
  //         data-ad-client="ca-pub-2290547364208155"
  //         data-ad-slot="7590912261"></ins>
  //     );
  //     break;
  //   case 'grid':
  //     CMP = (
  //       <ins
  //         className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-format="autorelaxed"
  //         data-ad-client="ca-pub-2290547364208155"
  //         data-ad-slot={slot}></ins>
  //     );
  //     break;
  // }
  // return <div>{CMP}</div>;
  return <></>;
};

export default Ads;
