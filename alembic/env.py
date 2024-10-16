"""Add FORMALS to new_producttype_v2 enum

Revision ID: <new_revision_id>
Revises: <previous_revision_id>
Create Date: <create_date>
"""
from alembic import op
from sqlalchemy.dialects.postgresql import ENUM

# revision identifiers, used by Alembic.
revision = '<new_revision_id>'
down_revision = '<previous_revision_id>'
branch_labels = None
depends_on = None

def upgrade() -> None:
    op.alter_column(
        'products',
        'type',
        type_=ENUM('CASUAL', 'FORMAL', 'WESTERN', 'EASTERN', 'FANCY_FORMAL', 'OUTING', 'FORMALS', name='new_producttype_v2'),
        postgresql_using='type::text::new_producttype_v2'
    )

def downgrade() -> None:
    op.alter_column(
        'products',
        'type',
        type_=ENUM('CASUAL', 'FORMAL', 'WESTERN', 'EASTERN', 'FANCY_FORMAL', 'OUTING', name='new_producttype_v2'),
        postgresql_using='type::text::new_producttype_v2'
    )
