import { Background, Scenario, ScenarioOutline } from 'gherkin-ast';
import { PreCompiler } from "gherking";

class StepGroups implements PreCompiler {
    onScenario(scenario: Scenario): void {
        scenario.useReadableStepKeywords();
    }

    onScenarioOutline(scenarioOutline: ScenarioOutline): void {
        scenarioOutline.useReadableStepKeywords();
    }

    onBackground(background: Background): void {
        background.useReadableStepKeywords();
    }
}

export = StepGroups;