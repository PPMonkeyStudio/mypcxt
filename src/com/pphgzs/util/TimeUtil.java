package com.pphgzs.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {
	static SimpleDateFormat formatter;

	// 获得精确到秒的时间
	public static String getStringSecond() {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date secondDate = new Date();
		String date = formatter.format(secondDate);
		try {
			secondDate = formatter.parse(date);
			return date;
		} catch (ParseException e) {
			e.printStackTrace();
			return "0000-00-00 00:00:00";
		}

	}
}
