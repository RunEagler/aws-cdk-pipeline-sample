import * as cdk from 'aws-cdk-lib'
import { Budget } from '../lib/constructs/budgets'
import { Capture, Match, Template } from 'aws-cdk-lib/assertions'

test('Budget construct', () => {
  const app = new cdk.App()
  const stack = new cdk.Stack(app, 'stack')
  new Budget(stack, 'Budget', {
    budgetAmount: 5,
    emailAddress: 'test@example.com',
  })

  const template = Template.fromStack(stack)
  template.hasResourceProperties('AWS::Budgets::Budget', {
    Budget: {
      BudgetLimit: {
        Amount: 5,
      },
    },
    NotificationsWithSubscribers: [
      Match.objectLike({
        Subscribers: [
          {
            Address: 'test@example.com',
          },
        ],
      }),
    ],
  })
})
