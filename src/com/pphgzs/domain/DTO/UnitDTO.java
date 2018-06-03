package com.pphgzs.domain.DTO;

import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.DO.mypcxt_user;

public class UnitDTO {
	private mypcxt_unit unit;
	private mypcxt_user user;

	@Override
	public String toString() {
		return "UnitDTO 【\nunit=" + unit + ", \nuser=" + user + "\n】";
	}

	public mypcxt_unit getUnit() {
		return unit;
	}

	public void setUnit(mypcxt_unit unit) {
		this.unit = unit;
	}

	public mypcxt_user getUser() {
		return user;
	}

	public void setUser(mypcxt_user user) {
		this.user = user;
	}

}
