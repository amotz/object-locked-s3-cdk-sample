#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ObjectLockedS3CdkSampleStack } from '../lib/object-locked-s3-cdk-sample-stack';

const app = new cdk.App();
new ObjectLockedS3CdkSampleStack(app, 'ObjectLockedS3CdkSampleStack');
