import graphene

from ingredients.models import Category


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


class DeleteCategory(graphene.Mutation):
    class Input:
        name = graphene.String()

    ok = graphene.Boolean()
    category = graphene.Field('Category')

    @classmethod
    def mutate(cls, instance, args, info):
        name = args.get('name')
        category = Category.objects.filter(name=name)
        category.delete()
        return CreateCategory(category=category, ok=True)


class EditCategory(graphene.Mutation):
    class Input:
        name = graphene.String()
        new_name = graphene.String()

    ok = graphene.Boolean()
    category = graphene.Field('Category')

    @classmethod
    def mutate(cls, instance, args, info):
        name = args.get('name')
        new_name = args.get('new_name')
        category = Category.objects.filter(name=name)
        category.update(name=new_name)
        return CreateCategory(category=category, ok=True)
