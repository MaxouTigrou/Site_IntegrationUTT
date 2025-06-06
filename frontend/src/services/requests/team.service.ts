import api from "../api";

export const createTeam = async (teamName: string, members: number[]) => {
      const response = await api.post(`team/create`, { teamName, members });
      return response.data;
};

export const getAllTeams = async () => {
  const res = await api.get("/team/teams");
  return res.data.data;
};

export const getTeamUsers = async (teamId: number) => {
  const res = await api.get(`/team/teamusers`, { params: { teamId } });
  return res.data.data;
};

export const getTeamFaction = async (teamId: number) => {
      const res = await api.get(`/team/teamfaction`, { params: { teamId } });
      return res.data.data;
};

export const updateTeam = async (payload: {
  teamID: number | null;
  teamName: string | null;
  factionID: number | null;
  teamMembers: number[] | null;
  type: string | null;
}) => {
  const res = await api.put("/team/modify", payload);
  return res.data;
};

export const deleteTeam = async (teamID: number) => {
  const res = await api.delete("/team/delete", { params: { teamID } });
  return res.data;
};

export const createTeamLight = async (payload: { teamName: string; factionId: number | null }) => {
  const res = await api.post("/team/createlight", payload);
  return res.data;
};

export const teamDistribution = async () => {
      const response = await api.post("team/distributeteam");
      return response.data
};

