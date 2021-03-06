# Generated by Django 2.2.14 on 2020-08-29 09:28

import bitfield.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('zerver', '0296_remove_userprofile_short_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='realm',
            name='authentication_methods',
            field=bitfield.models.BitField(['Google', 'Email', 'GitHub', 'LDAP', 'Dev', 'RemoteUser', 'AzureAD', 'SAML', 'GitLab', 'Apple', 'AWSCognito'], default=2147483647),
        ),
    ]