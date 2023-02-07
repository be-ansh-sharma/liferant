import { GiBookshelf, GiFireBottle, GiFishing } from 'react-icons/gi';
import { FaArrowLeft } from 'react-icons/fa';
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { IoWaterOutline, IoSettingsOutline } from 'react-icons/io5';
import { ImEvil2, ImHappy2, ImBin2 } from 'react-icons/im';
import { FaYinYang, FaHandHoldingHeart } from 'react-icons/fa';

const Icon = ({ name, style, className }) => {
  let CMP;
  switch (name) {
    case 'evil':
      CMP = ImEvil2;
      break;
    case 'IoWaterOutline':
      CMP = IoWaterOutline;
      break;
    case 'IoSettingsOutline':
      CMP = IoSettingsOutline;
      break;
    case 'ImHappy2':
      CMP = ImHappy2;
      break;
    case 'FaYinYang':
      CMP = FaYinYang;
      break;
    case 'ImBin2':
      CMP = ImBin2;
      break;
    case 'FaHandHoldingHeart':
      CMP = FaHandHoldingHeart;
      break;
    case 'GiBookshelf':
      CMP = GiBookshelf;
      break;
    case 'GiFireBottle':
      CMP = GiFireBottle;
      break;
    case 'GiFishing':
      CMP = GiFishing;
      break;
    case 'FaArrowLeft':
      CMP = FaArrowLeft;
      break;
    case 'TbDeviceMobileMessage':
      CMP = TbDeviceMobileMessage;
      break;
  }
  if (!CMP) {
    return null;
  }

  return <CMP style={style} className={className} />;
};

export default Icon;
