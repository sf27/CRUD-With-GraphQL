import graphene

from ingredients.schema import Query as queryBase


class Query(queryBase):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(name='Cookbook Schema')
schema.query = Query
