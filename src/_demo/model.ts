import http from "@assets/http";

const initData = {};

export default {
  namespace: "demo",
  state: initData,
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
    reset() {
      return { ...initData };
    }
  },
  effects: {
    *getInitData({}, { all, call, put }) {
      const data = yield call(getChartData, {
        startTime: "",
        endTime: "",
        type: "hour"
      });

      console.log("getInitData", data);
    }
  }
};

function getChartData(params) {
  return http.ajax({
    url: "/demo",
    params
  });
}
