import * as cdk from '@aws-cdk/core';
import * as s3 from "@aws-cdk/aws-s3";
export class ObjectLockedS3CdkSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = "sample-object-locked-bucket-99999999999"
    new s3.CfnBucket(this, "sampleObjectLockedBucket", {
      bucketName: bucketName,
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: "AES256"
            }
          }
        ]
      },
      objectLockEnabled: true,
      objectLockConfiguration: {
        objectLockEnabled: "Enabled",
        rule: {
          defaultRetention: {
            mode: "GOVERNANCE",
            days: 1
          }
        }
      }
    });
  }
}
