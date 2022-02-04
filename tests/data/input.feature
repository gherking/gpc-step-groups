Feature: Test for stepGroups

  Rule: Testing rule
    Background:
      Given step
      Given step
      When step
      And step
      When step
      Then step
      Then step
      And step

    Scenario: Test
      Given step
      Given step
      When step
      And step
      When step
      Then step
      Then step
      And step

    Scenario Outline: Test (<test>)
      Given step
      Given step
      When step
      And step
      When step
      Then step
      Then step
      And step

      Examples:
        | test |
        | test |