# Scopes

> Scope indicates the actions individual access tokens can perform on resources.

[Individual access tokens](./access-token.md) can only access API endpoints covered by the scopes granted to them. The complete reference information for available scopes is as follows.

In addition to requesting the correct scope, tokens must also possess the resources and permissions required to perform the actions.

**For example:** If an individual access token is granted the scope `record|read` and is associated with a base, it can access records within tables in that base, but it is not permitted to write records to tables in that base or access records from tables outside of that base.

## Scope Range

All users can use the following scopes.

### Space

| Scope               | Description                         |
| ------------------- | ----------------------------------- |
| space\|create       | Create spaces                       |
| space\|update       | Update spaces                       |
| space\|delete       | Delete spaces                       |
| space\|read         | Read spaces                         |
| space\|invite_email | Invite users to spaces via email    |
| space\|invite_link  | Generate invitation links to spaces |
| space\|grant_role   | Grant roles to users in spaces      |

### Base

| Scope              | Description                       |
| ------------------ | --------------------------------- |
| base\|create       | Create base                       |
| base\|update       | Update base                       |
| base\|delete       | Delete base                       |
| base\|read         | Read base                         |
| base\|invite_email | Invite users to base via email    |
| base\|invite_link  | Generate invitation links to base |

### Table

| Scope         | Description       |
| ------------- | ----------------- |
| table\|create | Create tables     |
| table\|update | Update tables     |
| table\|delete | Delete tables     |
| table\|read   | Read tables       |
| table\|import | Import table data |

### View

| Scope        | Description  |
| ------------ | ------------ |
| view\|create | Create views |
| view\|update | Update views |
| view\|delete | Delete views |
| view\|read   | Read views   |

### Field

| Scope         | Description   |
| ------------- | ------------- |
| field\|create | Create fields |
| field\|update | Update fields |
| field\|delete | Delete fields |
| field\|read   | Read fields   |

### Record

| Scope           | Description        |
| --------------- | ------------------ |
| record\|create  | Create records     |
| record\|update  | Update records     |
| record\|delete  | Delete records     |
| record\|read    | Read records       |
| record\|comment | Comment on records |