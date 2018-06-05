package com.pphgzs.thread;

public class ServiceDistributionThread {

	private final static String RUN = "run";

	private final static String STOP = "stop";

	private static String serviceDistributionThreadState = STOP;

	/*
	 * 
	 */
	public static void startServiceDistributionThread() {
		if (serviceDistributionThreadState.equals(RUN)) {
			return;
		}
		serviceDistributionThreadState = RUN;
		new Thread() {
			@Override
			public void run() {
				while (serviceDistributionThreadState.equals(RUN)) {
					try {
						System.out.println("正在执行分配线程");
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}.start();
	}

	public static void stopServiceDistributionThread() {
		serviceDistributionThreadState = STOP;
	}

	/*
	 * 
	 */
	public static String getServiceDistributionThreadState() {
		return serviceDistributionThreadState;
	}

	public static void setServiceDistributionThreadState(String serviceDistributionThreadState) {
		ServiceDistributionThread.serviceDistributionThreadState = serviceDistributionThreadState;
	}

	public static String getRun() {
		return RUN;
	}

	public static String getStop() {
		return STOP;
	}

}
