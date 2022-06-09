import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import * as Pipeline from '../lib/pipeline-stack'

test('Pipeline Stack', () => {
  const app = new cdk.App()
  // WHEN
  const stack = new Pipeline.PipelineStack(app, 'MyTestStack')
  const template = Template.fromStack(stack)
  expect(template.toJSON()).toMatchSnapshot()
})
