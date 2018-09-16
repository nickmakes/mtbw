import { HttpRequests, MediaType, ApiClient } from 'mmdb-client-factory';
import { Team, Player } from '.';

export type MtbwApi = ReturnType<typeof apiSupplier>;

export type MtbwClient = ApiClient<MtbwApi>;

const options = (o: object = {}) => ({ contentType: MediaType.APPLICATION_JSON, ...o });

export const apiSupplier = (http: HttpRequests) => ({
    teams: () => {
      const teamsUrl = 'teams';
      return {
        list: () => http.get<Team[]>(teamsUrl, options()),
        count: () => http.get<number>(`${teamsUrl}/count`, options()),
        create: (data: Team) =>
            http.post<Team>(teamsUrl, options({ body: JSON.stringify(data) })),
        clear: () => http.delete<void>(teamsUrl, options()),
        team: (id: string) => {
          const teamUrl = `${teamsUrl}/${id}`;
          return {
            get: () => http.get<Team>(teamUrl, options({  })),
            check: () => http.get<boolean>(`${teamUrl}/check`, options({  })),
            update: (data: Team) => http.put<Team>(teamUrl, options({ body: JSON.stringify(data) })),
            remove: () => http.delete<void>(teamUrl, options({  })),
          };
        }
      };
    },
    players: () => {
      const playersUrl = 'players';
      return {
        list: () => http.get<Player[]>(playersUrl, options()),
        count: () => http.get<number>(`${playersUrl}/count`, options()),
        create: (data: Player) =>
            http.post<Player>(playersUrl, options({ body: JSON.stringify(data) })),
        clear: () => http.delete<void>(playersUrl, options()),
        player: (id: string) => {
          const playerUrl = `${playersUrl}/${id}`;
          return {
            get: () => http.get<Player>(playerUrl, options({  })),
            check: () => http.get<boolean>(`${playerUrl}/check`, options({  })),
            update: (data: Player) => http.put<Player>(playerUrl, options({ body: JSON.stringify(data) })),
            remove: () => http.delete<void>(playerUrl, options({  })),
          };
        }
      };
    },
});