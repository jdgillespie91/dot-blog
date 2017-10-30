blog
====

The front-end app that is `my blog`__.

.. _blog: https://says.jakegillespie.me

__ blog_

Usage
-----

Run the app in development mode with

.. code-block:: bash

  $ npm start

Development
-----------

*Requires awscli_*

Create the infrastructure using the templates in the infra_ folder. For example, create the resources from scratch with

.. code-block:: bash

    $ aws cloudformation create-stack --stack-name dot-blog-resources --template-body file://infra/resources.yml

Update an existing set of resources with

.. code-block:: bash

    $ aws cloudformation create-change-set --stack-name dot-blog-resources --template-body file://infra/resources.yml --change-set-name dot-blog-resources-cs-1
    $ aws cloudformation execute-change-set --stack-name dot-blog-resources --change-set-name dot-blog-resources-cs-1

.. _awscli: https://aws.amazon.com/cli/
.. _infra: infra

Certificates
------------

Certificates are managed via `Let's Encrypt`__. To renew, use `this guide`__ (there might be a better way). Note that certbot_ is the local binary that should be used.

.. _le: https://letsencrypt.org/
.. _guide: https://www.codeword.xyz/2016/01/06/lets-encrypt-a-static-site-on-amazon-s3/
.. _certbot: https://certbot.eff.org/

__ le_
__ guide_
