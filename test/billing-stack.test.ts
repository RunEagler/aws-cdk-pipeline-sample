import * as cdk from 'aws-cdk-lib'
import { Budget } from '../lib/constructs/budgets'
import { Capture, Match, Template } from 'aws-cdk-lib/assertions'
import { BillingStack } from '../lib/billing-stack'

test('Billing Stack', () => {
  const app = new cdk.App()
  const stack = new BillingStack(app, 'BillingStack', {
    budgetAmount: 1,
    emailAddress: 'test@example.com',
  })
  const template = Template.fromStack(stack)
})
