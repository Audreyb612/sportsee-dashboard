import { getUserInfo, getUserActivity } from "@/services/api";
import { mockUser, mockActivity } from "@/mocks/userMock";
import { formatUserInfo, formatActivity } from "@/utils/formatUserData";

const USE_MOCK = true;

export async function getDashboardData(token) {
  if (USE_MOCK) {
    return { user: mockUser, activity: mockActivity };
  }

  const userInfo = await getUserInfo(token);
  const userActivity = await getUserActivity(token, "2025-01-01", "2025-12-31");

  return {
    user: formatUserInfo(userInfo),
    activity: formatActivity(userActivity),
  };
}