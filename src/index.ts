import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

let matchReader = new MatchReader("football.csv");
matchReader.read();

let summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());

summary.buildAndPrintReport(matchReader.data);
