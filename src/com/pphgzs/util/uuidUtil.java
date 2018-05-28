package com.pphgzs.util;

import java.util.UUID;

public class uuidUtil {
	public static String getUuid() {
		UUID uuid = UUID.randomUUID();
		String uuidStr = uuid.toString();
		return uuidStr;
	}
}
