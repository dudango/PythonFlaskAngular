"""add long description to exams

Revision ID: 45780752439b
Revises: 
Create Date: 2018-07-31 14:52:51.496187

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '45780752439b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
	 op.add_column('exams', sa.Column(
        'long_description',
        sa.Text,
        nullable=False,
        server_default='Default exam description'))


def downgrade():
    pass
