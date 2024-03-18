from django.db import models


class Rabbit(models.Model):
    """Model for a rabbit."""
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100, blank=True)
    sex = models.CharField(max_length=1, choices=(('F', 'Doe (Female)'), ('M', 'Buck (Male)'),), blank=True)
    date_of_birth = models.DateField(blank=True)
    description = models.TextField(blank=True)
    neutered = models.BooleanField(default=False)
    vaccinated = models.BooleanField(default=False)
    group = models.ForeignKey('RabbitGroup', on_delete=models.CASCADE, blank=True, null=True)
    
    def age(self):
        import datetime
        return datetime.date.today().year - self.date_of_birth.year
    
    def __str__(self):
        return self.name


class RabbitGroup(models.Model):
    """
    Represents a group of rabbits.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_rabbits(self):
        return Rabbit.objects.filter(group=self)

    def get_rabbits_count(self):
        return self.get_rabbits().count()

    def __str__(self):
        names_string = ' & '.join([rabbit.name for rabbit in self.get_rabbits()])
        return names_string

class RabbitImage(models.Model):
    """
    Represents an image of a group of rabbits.
    """
    rabbit_group = models.ForeignKey(RabbitGroup, on_delete=models.CASCADE)

    image = models.ImageField(
        upload_to='rabbits/', blank=True
    )
    
    def __str__(self):
        return str(self.rabbit_group) + ' Image'