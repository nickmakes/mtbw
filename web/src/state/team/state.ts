import { Team } from "mtbw-sdk";

export interface TeamState {
  teams: Team[];
}

export const initialTeamState: TeamState = { teams: [] };
