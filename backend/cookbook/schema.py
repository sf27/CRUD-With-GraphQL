import graphene

import ingredients.schema


class Query(ingredients.schema.Query):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(name='Cookbook Schema')
schema.query = Query
