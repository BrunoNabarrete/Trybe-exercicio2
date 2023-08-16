import pytest
from codigo import is_odd, division


def test_is_odd():
    assert is_odd(2) is False
    assert is_odd(3) is True
    assert is_odd(8) is False


def teste_divide():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        division(2, 0)
