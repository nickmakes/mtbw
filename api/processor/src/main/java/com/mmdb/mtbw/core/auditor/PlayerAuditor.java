package com.mmdb.mtbw.core.auditor;

import com.mmdb.makes.projects.data.ResourceAuditor;
import com.mmdb.mtbw.types.player.Player;
import org.springframework.stereotype.Component;

@Component
public class PlayerAuditor implements ResourceAuditor<Player, String> {
}