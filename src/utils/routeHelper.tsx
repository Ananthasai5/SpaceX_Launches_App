import { intersection } from "lodash";
import { LocalStorage } from "services/storage";

export function isArrayWithLength(arr: Array<any>) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: Array<any>) {
  const user = LocalStorage.getStorage("user");
  if (!user) {
    return;
  }

  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, user.roles).length;
  });
}
