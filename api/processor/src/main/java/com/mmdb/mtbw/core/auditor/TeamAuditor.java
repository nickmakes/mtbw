package com.mmdb.mtbw.core.auditor;

import com.mmdb.makes.projects.data.ResourceAuditor;
import com.mmdb.mtbw.types.team.Team;
import org.springframework.stereotype.Component;

@Component
public class TeamAuditor implements ResourceAuditor<Team, String> {
}