import graphene
from graphene.contrib.django.debug import DjangoDebugMiddleware

import graphql_app.schema as schema


class Query(schema.Query):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Category(graphene.ObjectType):
    name = graphene.String()


class MyMutations(graphene.ObjectType):
    create_category = graphene.Field(schema.CreateCategory)
    category = graphene.Field(Category)


schema = graphene.Schema(
    name='Category Schema',
    mutation=MyMutations,
    middlewares=[DjangoDebugMiddleware()]
)
schema.query = Query
