import { Roles } from '../../../helper/constants';

const RoleBadge = ({ level }) => {
    switch (level) {
      case Roles.LEADERSHIP: return 'Leadership';
      case Roles.MANAGER: return 'Manager';
      case Roles.ADMIN:
      default:
        return 'Admin';
    }
};

export default RoleBadge;
  