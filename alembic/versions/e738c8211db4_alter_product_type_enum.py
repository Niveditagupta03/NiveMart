"""Add FORMALS to new_producttype_v2 enum

Revision ID: e738c8211db4
Revises: 76a10d7d91ac
Create Date: 2024-09-28 00:00:00.000000

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import ENUM

# revision identifiers, used by Alembic.
revision: str = 'e738c8211db4'
down_revision: Union[str, None] = '76a10d7d91ac'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.alter_column(
        'products',
        'type',
        type_=sa.Enum('WESTERN', 'CASUAL', 'FANCY_FORMAL', 'FORMALS', 'OUTING', name='producttype'),
        postgresql_using='type::text::producttype'
    )

def downgrade() -> None:
    op.alter_column(
        'products',
        'type',
        type_=sa.Enum('WESTERN', 'CASUAL', 'FANCY_FORMAL', 'OUTING', name='producttype'),
        postgresql_using='type::text::producttype'
    )
