@pytest.fixture(params=[
    ('redis', '6379'),
    ('elasticsearch', '9200')
])
def param(request):
    return request.param


@pytest.fixture(autouse=True)
def db(param):
    print('\nSucceed to connect %s:%s' % param)

    yield

    print('\nSucceed to close %s:%s' % param)


def test_api():
    assert 1 == 1

"""
output:

tests\fixture\test_parametrize.py
Succeed to connect redis:6379
.
Succeed to close redis:6379

Succeed to connect elasticsearch:9200
.
Succeed to close elasticsearch:9200
"""