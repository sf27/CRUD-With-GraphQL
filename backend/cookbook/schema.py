import graphene

import ingredients.mutations
import ingredients.schema


class Category(graphene.ObjectType):
    name = graphene.String()


class CategoryMutations(graphene.ObjectType):
    create_category = graphene.Field(ingredients.mutations.CreateCategory)
    delete_category = graphene.Field(ingredients.mutations.DeleteCategory)
    edit_category = graphene.Field(ingredients.mutations.EditCategory)
    category = graphene.Field(Category)


class Query(ingredients.schema.Query):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(
    name='Cookbook Schema',
    mutation=CategoryMutations,
)
schema.query = Query
