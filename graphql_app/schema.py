import graphene
from graphene import relay, ObjectType
from graphene.contrib.django.debug import DjangoDebug
from graphene.contrib.django.filter import DjangoFilterConnectionField
from graphene.contrib.django.types import DjangoNode

from graphql_app.models import Category, Ingredient


# Graphene will automatically map the Category model's fields onto the CategoryNode.
# This is configured in the CategoryNode's Meta class (as you can see below)
class CategoryNode(DjangoNode):
    class Meta:
        model = Category
        filter_fields = ['name', 'ingredients']
        filter_order_by = ['name']


class IngredientNode(DjangoNode):
    class Meta:
        model = Ingredient
        # Allow for some more advanced filtering here
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
            'notes': ['exact', 'icontains'],
            'category': ['exact'],
            'category__name': ['exact'],
        }
        filter_order_by = ['name', 'category__name']


class CreateCategory(graphene.Mutation):
    class Input:
        name = graphene.String()

    ok = graphene.Boolean()
    category = graphene.Field('Category')

    @classmethod
    def mutate(cls, instance, args, info):
        name = args.get('name')
        category = Category.objects.create(name=name)
        return CreateCategory(category=category, ok=True)


class Query(ObjectType):
    category = relay.NodeField(CategoryNode)
    all_categories = DjangoFilterConnectionField(CategoryNode)

    ingredient = relay.NodeField(IngredientNode)
    all_ingredients = DjangoFilterConnectionField(IngredientNode)

    debug = graphene.Field(DjangoDebug, name='__debug')

    class Meta:
        abstract = True
