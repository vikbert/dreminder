module.exports = [
  {
    data: [
      'Builder Factory',
      '📋 The intent of the Builder design pattern is to separate the construction of a complex object \
      from its representation. It is one of the Gang of Four design patterns. The Builder design pattern \
      describes how to solve such problems: 1. Encapsulate creating and assembling the parts of a complex \
      object in a separate Builder object. 2. A class delegates object creation to a Builder object instead \
      of creating the objects directly. Advantages of the Builder pattern include: \
      [1] Allows you to vary a product’s internal representation. \
      [2] Encapsulates code for construction and representation. \
      [3] Provides control over steps of construction process. \
      Disadvantages of the Builder pattern include: \
      [1] Requires creating a separate ConcreteBuilder for each different type of product. \
      [2] Requires the builder classes to be mutable. \
      [3] Dependency injection may be less supported.'
    ],
    enabled: true
  },
  {
    data: [
      'Static Factory',
      '📋 The difference between Static Factory and the abstract factory pattern is that \
      the static factory pattern uses just one static method to create all types of objects it \
      can create. It is usually named build(type).'
    ],
    enabled: true
  },
  {
    data: [
      'Abstract Factory',
      '📋 To create series of related or dependent objects without specifying their concrete classes. \
      Usually the created classes implement the same interface. An example of this would be an \
      abstract factory class "DocumentFactory" that provides interfaces to create a number of products \
      (e.g. createLetter() and createResume()). The system would have any number of derived concrete \
      versions of the "DocumentFactory" class like "ClassicDocumentFactory" or "ModernDocumentFactory", \
      each with a different implementation of "createLetter()" and "createResume()" that would create \
      a corresponding object like "ClassicLetter" or "ModernResume". Each of these products is derived \
      from a simple abstract class like "Document" of which the client is aware. The client code \
      would get an appropriate instance of the DocumentFactory and call its factory methods. '
    ],
    enabled: true
  },
  {
    data: [
      'Adapter(wrapper) Pattern',
      '📋 To translate one interface for a class into a compatible interface for the clients. An adapter allows clients \
      to work with those classes with incompatible interfaces by translating them into compatible one. \
      Example: BookService can only read a normal Book, which implements BookInterface; but to allow \
      BookService to read an Ebook(implements EbookInterface), you can use EbookAdapter that is able to \
      translate the EbookInterface into BookInterface, so that BookService can read also Ebook, too.'
    ],
    enabled: true
  },
  {
    data: [
      'Singleton Pattern',
      '📋 To have only one instance of this object in the application that will handle all requests. For example: \
      single locker file, single DB connection'
    ],
    enabled: true
  }
]

module.exports_backup = [
  { data: ['学会离开', '你是否经历过大脑会自己突然迸发出问题的解决方案? 你所要做的就是，离开电脑，完全的从现在的工作状态抽离出来'], enabled: false },
  { data: ['微休息', '微休息是提高肌肉活动性能的最佳方式。经常性的微休息可以'], enabled: false },
  { data: ['防止干眼症', '长时间的盯着显示器，会引起各种干眼疾病。快速的眨眼会有效的缓解这种状况。'], enabled: false },
  { data: ['坐姿-站姿', '你是否有可以升降的办公桌？可以考虑一下转换一下'], enabled: false },
  { data: ['重新加强注意力', '你是不是在焦头烂额不知所从？这时候就表明你需要休息一下了。'], enabled: false },
  { data: ['远离技术', '来个非技术的散步如何?'], enabled: false },
  { data: ['享受水果', '花时间去享用水果，要让身体保持酸性环境'], enabled: false },
  { data: ['上厕所', '走路去最远的卫生间，让自己离开现在的环境'], enabled: false },
  { data: ['咖啡时间', '咖啡时间? 保证你每次喝咖啡的时间要达到五分钟.'], enabled: false },
  { data: ['实践', '看再多的书是学不会脚本语言的'], enabled: false },
  { data: ['简单和复杂', '简单不先于复杂，而是在复杂之后.'], enabled: false },
  { data: ['代码和注释', '优秀的代码几乎不需要代码注释，专注KISS原则吧。'], enabled: false },
  { data: ['好程序员和好代码', '任何傻瓜都能写出计算机可以理解的代码。好的程序员能写出人能读懂的代码'], enabled: false },
  { data: ['承诺', '如果你没有把握做到，最好就不要承诺，你什么也不承诺，至少别人不会看不起你。'], enabled: false },
  { data: ['调试代码', '如果调试一个程序让你很苦恼，千万不要放弃，成功永远在拐角之后，除非你走到拐角。'], enabled: false },
  { data: ['理解', '尝试着对别人讲解这个知识点并让他理解——你能讲清楚才说明你真的理解了。'], enabled: false },
  { data: ['我需要注释吗？', '优秀的代码是它自己最好的文档。当你考虑要添加一个注释时，问问自己，如何能改进这段代码，以让它不需要注释'], enabled: false },
  { data: ['出类拔萃', '你比他好一点，他不会承认你，反而会嫉妒你，只有你比他好很多，他才会承认你，然后还会很崇拜你，所以要做，就一定要比别人做得好很多'], enabled: false },
  { data: ['测试代码', '测试是来表明bug的存在，而不是不存在'], enabled: false },
  { data: ['咖啡时间', '保证你每次喝咖啡的时间要达到五分钟'], enabled: false },
  { data: ['面对面的合作', '不要发短信给你的同事，而是走到他的桌前和他交流'], enabled: false }
]
