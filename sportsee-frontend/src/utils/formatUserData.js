export function formatUserInfo(userInfo) {
    return {
      firstName: userInfo.profile.firstName,
      lastName: userInfo.profile.lastName,
      profilePicture: userInfo.profile.profilePicture,
      totalDistance: Number(userInfo.statistics.totalDistance),
      totalSessions: userInfo.statistics.totalSessions,
      totalDuration: userInfo.statistics.totalDuration,
    };
  }
  
  export function formatActivity(activity) {
    return activity.map((session) => ({
      date: session.date,
      distance: session.distance,
      duration: session.duration,
      calories: session.caloriesBurned,
      averageHeartRate: session.heartRate.average,
    }));
  }