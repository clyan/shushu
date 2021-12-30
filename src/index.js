import "./jsonCompatible";
import ThinkingDataAnalyticsLib from './ThinkingDataAnalyticsLib';
var tdMaster;
function initAsModule() {
    return tdMaster = new ThinkingDataAnalyticsLib;
}

const td = initAsModule();

export default td
