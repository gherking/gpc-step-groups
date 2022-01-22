import { Background, Scenario, ScenarioOutline } from 'gherkin-ast';
import { PreCompiler } from "gherking";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require("debug")("gpc:step-groups");

class StepGroups implements PreCompiler {
    onScenario(scenario: Scenario): void {
        debug("Processing Scenario: %s", scenario.name)
        scenario.useReadableStepKeywords();
    }

    onScenarioOutline(scenarioOutline: ScenarioOutline): void {
        debug("Processing Scenario Outline: %s", scenarioOutline.name)
        scenarioOutline.useReadableStepKeywords();
    }

    onBackground(background: Background): void {
        debug("Processing Background: %s", background.name)
        background.useReadableStepKeywords();
    }
}

export = StepGroups;