"""{{ MESSAGE }}

Revision ID: 76a10d7d91ac
Revises: dfa6f0357c7b
Create Date: 2024-09-27 23:58:36.768293

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '76a10d7d91ac'
down_revision: Union[str, None] = 'dfa6f0357c7b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
